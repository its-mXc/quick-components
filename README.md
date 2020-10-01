# quick-components
Components for quick prototyping in ReactJS(in works 📌)

Requirements
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)

To be a npm library....

Components
* Notice
  > <Notice message="message text", heading="heading text", variant="success" />

* LoginForm
  > <LoginForm handleEmailChange={ emailchangefunction }, handlePasswordChange={ passwordchangefunction }, handleLogin={ loginfunction } remember/>
  
    > Addidtional Props for login form
    > * emailLabel, default_value: "Email Address"
    > * emailPlaceholder, default_value: "Enter Email"
    > * passwordLabel, default_value: "Password"
    > * passwordPlaceholder, default_value: "Password"
    >* buttonText, default_text: "Login"
    >* rememberlabel, default_text: "Remember me"
 
* SignupForm
  > < SignupForm handleNameChange={ nameChangeFn }, handleEmailChange={ emailChangeFn }, handlePasswordChange={passowordChangeFn}, handleSignup={signupFn} /> 
  
* Avatar
  > < Avatar image='./images/1.png' diamater='50' /> 
* Card
  > <Card header="header text", title="title text", text="text" /> 

* NavigationBar
  > <NavigationBar logo="logo text" navItems={{'home': '#home', 'contact':'/contact'}} />
  
* Dropdown
  > <Dropdown items={{'home': '#home', 'contact':'/contact'}} dividedItems={{'careers': '/careers'}} />

* Pagination
  > <Pagination pages="5" prefix={ window.location } />

* Modal
  > <Modal title="title text", body="body text", buttonText="Save", buttonFunction={ handleSaveFunction }) >
  
