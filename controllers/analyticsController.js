const requestIp = require("request-ip");
const axios = require("axios");
const WebLog = require("../models/webLogModel");

const logRequest = async (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  const ua = req.get("User-Agent");
  const { path } = req.body;
  if (clientIp) {
    axios.get(`http://ip-api.com/json/${clientIp}`).then(async (response) => {
      await WebLog.create({ ua, path, ...response.data });
    });
  }
  res.end();
};

module.exports = { logRequest };
