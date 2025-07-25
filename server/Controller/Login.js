const Login = async (req, res) => {
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