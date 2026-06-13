function getHealthStatus(req, res) {
  res.json({ status: 'ok', service: 'healthcare-backend' });
}


module.exports = {
  getHealthStatus,
};
