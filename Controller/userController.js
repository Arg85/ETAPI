const data=[{name:"anurag"},{name:"anjali"}]
exports.users = async (req, res, next) => {
    console.log("rendering")
   res.send(data)
  }
