const User = require('../Models/UserShema');

const getUser = async (req, res) => {
  const { email } = req.body; 

  try {
    console.log('Request Body:', req.body);

    let record = await User.findOne({ email })
    if (record) {
      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved record',
        data: record,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Record not found',
      });
    }

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error', err: err.message });
  }
};

const getUserFunction = (req, res) => getUser(req, res);

module.exports = {
    getUserFunction,
};
