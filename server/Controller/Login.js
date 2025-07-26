const Login = async (req, res) => {
    const {} = req.body
    try
    {
        res.status(200).send("Checking");
    }   
    catch(err)
    {
        res.status(200).json(err)
    }
}
module.exports = {Login}