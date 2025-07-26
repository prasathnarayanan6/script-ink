const Login = async (req, res) => {
    const {} = req.params
    try
    {
        res.status(200).send("Check");
    }   
    catch(err)
    {
        res.status(200).json(err)
    }
}
module.exports = {Login}