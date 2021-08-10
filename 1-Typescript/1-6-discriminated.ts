{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 🥺 reason

  function printLoginState(state: LoginState) {
    state.result; // success or fail
    if (state.result === "success") {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`😭${state.reason}`);
    }
  }
}
