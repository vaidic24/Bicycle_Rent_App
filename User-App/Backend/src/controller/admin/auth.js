// #C8 copied from auth controller 

const User = require('../../models/user');
const jwt = require('jsonwebtoken'); // #C6

exports.signup = (req, res) => { // attach a function with export so that we can call  signup

    console.log(req.body);

    // #C4
    // lets create the user first 
    // if user already exists then we will not alloe to register 
    User.findOne({ email: req.body.email })
        .exec(async (error, user) => {

            if (user) return res.status(400).json({
                message: "Admin already registered !"
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body; // destructuring the request body

            const hash_password = await bcrypt.hash(password, 10);


            // else we will register the user 
            const _user = new User({
                firstName,
                lastName,
                email,
                // password,
                hash_password,
                // userName : Math.random().toString(),   // for now we are assigning this randomly 
                userName: shortid.generate(),
                role: 'admin' // # C8
            }); // this takes an object 

            _user.save((error, data) => {

                if (error) {

                    console.log(error);

                    return res.status(400).json({
                        message: "Something went wrong !"
                    });
                }

                if (data) {
                    console.log(data);

                    return res.status(201).json({
                        message: "Admin created successfully !"
                        // user : data
                    });
                }

            });


        });

    //#C4 end 
    //#C5 we move to controller 
    // move all this to controller

    // #C5 end 
}

// #C6 
exports.signin = (req, res) => {

    // console.log(req.body);

    User.findOne({ email: req.body.email })
        .exec(  async (error, user) => { // we get the user from this callback function 

            // console.log(error);
            // console.log(user);

            if (error) return res.status(400).json({ error });

            if (user) {

                // we have found the user --> with the same email 
                // lets verify the password 
                // if (user.authenticate(req.body.password)) {
                const userPromise = await user.authenticate(req.body.password);
                // if (user.authenticate(req.body.password)) {
                if (userPromise) { // now will be correct  true of false // not a promise 

                    // if password is also correct 
                    // we will return a token from the backend(here) which will manage the user session 

                    // so lets create the token 
                    // const token = jwt.sign( { _id : user._id } , process.env.JWT_SECRET , { expiresIn : '1h' } ); // first payload   // second private key 
                    const token = jwt.sign({ _id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, fullName: user.fullName, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' }); // first payload   // second private key 
                    // secret can be anything 

                    // now token is generated 
                    // now you can send the response 
                    // const { firstName , lastName , email , role , fullName }  = user; // destructure the user  --> we want the id also 
                    const { _id, firstName, lastName, email, role, fullName } = user; // destructure the user 
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });
                    // when in an obj we write token it means  token : token

                }
                else {
                    return res.status(400).json({ message: 'Invalid Password !' });
                }

            }
            else {
                return res.status(400).json({ message: 'Something went wrong 1!' });
            }
        })
} 
