 const LoginReducer = (state, action) => {
 
    switch (action.type) {

      case "LOGIN":
          return state.map(member => {
              if (member.username !== action.username) {
                  return member;
              }

              if (member.password == action.password) {
                  return {
                      ...member,
                      login_status: "LOGGED IN"
                  }
              }
          });
       default:
          return state;
      } 
};

export default LoginReducer;