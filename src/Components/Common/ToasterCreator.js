/*
 * @param presetState - {object}
 * @param isVisible - {Boolean}
 * @param type - {String}  "error" || "success"
 * @param header - {String}
 * @param message - {String}
 */

const CONSTANT = {
  type: ["error", "success"],
  header: "Error",
  message: "Something went wrong"
};

//ToasterCreator(this.state.toaster, true, "error", "Error", error.message );

const ToasterCreator = (presetState, isVisible, type, header, message) => {
  //if checkType is coming with some string, it means something is wrong;
  if (typeof type != "string") {
    return "type props can only be string";
  }

  if (!CONSTANT.type.includes(type)) {
    return "`type` can only be `error` or `success`";
  }

  if(typeof message != "string"){
    return "message prop can only be of String type."
  }

  if(typeof header != "string"){
    return "header prop can only be of String type."
  }

  if(typeof isVisible != "boolean"){
    return "isVisible prop can only be Boolean."
  }
  const temp = Object.assign(presetState, {
    isVisible: typeof isVisible === Boolean ? isVisible : true,
    type: type,
    header: header,
    message: message
  });
  return temp;
};

const closeToaster = prevState => {
  const newState = Object.assign(prevState, { isVisible: false });
  return newState;
};

export { ToasterCreator, closeToaster };
