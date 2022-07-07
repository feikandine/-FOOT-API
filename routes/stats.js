// création du routeur  utile avec la Methode GET

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './stats.json'));
    const stats = JSON.parse(data);
    const playerStats = stats.find(player => player.id === Number(req.params.id));
    if (!playerStats) {
      const err = new Error('Player stats not found');
      err.status = 404;
      throw err;
    }
    res.json(playerStats);
  } catch (e) {
    next(e);
  }
};

router
  .route('/api/v1/stats/:id')
  .get(getStats);

module.exports = router;

// Création de la methode POST pour créer un nouvel lecteur

const createStats = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './stats.json'));
      const stats = JSON.parse(data);
      const newStats = {
        id: req.body.id,
        wins: req.body.wins,
        losses: req.body.losses,
        points_scored: req.body.points_scored,
      };
      stats.push(newStats);
      fs.writeFileSync((path.join(__dirname, './stats.json')), JSON.stringify(stats));
      res.status(201).json(newStats);
    } catch (e) {
      next(e);
    }
  };
  
  router
    .route('/api/v1/stats')
    .post(createStats);
// Créons la methode PUT 


    const updateStats = async (req, res, next) => {
        try {
          const data = fs.readFileSync(path.join(__dirname, './stats.json'));
          const stats = JSON.parse(data);
          const playerStats = stats.find(player => player.id === Number(req.params.id));
          if (!playerStats) {
            const err = new Error('Player stats not found');
            err.status = 404;
            throw err;
          }
          const newStatsData = {
            id: req.body.id,
            wins: req.body.wins,
            losses: req.body.losses,
            points_scored: req.body.points_scored,
          };
          const newStats = stats.map(player => {
            if (player.id === Number(req.params.id)) {
              return newStatsData;
            } else {
              return player;
            }
          });
          fs.writeFileSync((path.join(__dirname, './stats.json')), JSON.stringify(newStats));
          res.status(200).json(newStatsData);
        } catch (e) {
          next(e);
        }
      };
      
      





      router
  .route('/api/v1/stats/:id')
  .get(getStats)
  .put(updateStats);







  const deleteStats = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './stats.json'));
      const stats = JSON.parse(data);
      const playerStats = stats.find(player => player.id === Number(req.params.id));
      if (!playerStats) {
        const err = new Error('Player stats not found');
        err.status = 404;
        throw err;
      }
      const newStats = stats.map(player => {
        if (player.id === Number(req.params.id)) {
          return null;
        } else {
          return player;
        }
      })
      .filter(player => player !== null);
      fs.writeFileSync((path.join(__dirname, './stats.json')), JSON.stringify(newStats));
      res.status(200).end();
    } catch (e) {
      next(e);
    }
  }; 








  router
  .route('/api/v1/stats/:id')
  .get(getStats)
  .put(updateStats)
  .delete(deleteStats);