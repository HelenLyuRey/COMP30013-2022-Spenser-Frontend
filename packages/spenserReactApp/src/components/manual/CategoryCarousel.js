import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Shopping",
    iconPath: require("../../images/shopping-icon.png"),
    imgPath: require("../../images/shopping-img.jpg"),
    categories: ["clothing", "accessories", "cosmetics", "kitchenware", "daily necessities",
                "pet supply", "baby product"],
    },
  {
    label: "Food",
    iconPath: require("../../images/food-icon.png"),
    imgPath: require("../../images/food-img.jpg"),
    categories: ["meal", "snacks", "fresh produce", "drink", "grocery"]

  },
  {
    label: "Housing",
    iconPath: require("../../images/housing-icon.png"),
    imgPath: require("../../images/housing-img.jpg"),
    categories: ["housing payment", "furniture", "utilities"]
  },
  {
    label: "Education",
    iconPath: require("../../images/education-icon.png"),
    imgPath: require("../../images/teaching-img.jpg"),
    categories: ["school fee", "stationary", "school supplies"]
  },
  {
    label: "Transport",
    iconPath: require("../../images/transport-icon.png"),
    imgPath: require("../../images/transport-img.jpg"),
    categories: ["car maintainance", "transport ticket"]
  },
  {
    label: "Entertainment",
    iconPath: require("../../images/entertainment-icon.png"),
    imgPath: require("../../images/entertainment-img.jpg"),
    categories: ["movie", "party", "bar", "travel", "gym"]
  },
  {
    label: "Gifts/Donations",
    iconPath: require("../../images/donation-icon.png"),
    imgPath: require("../../images/donation-img.jpg"),
    categories: ["gift", "donation", "charities"]
  },
  {
    label: "Healthcare",
    iconPath: require("../../images/healthcare-icon.png"),
    imgPath: require("../../images/healthcare-img.jpg"),
    categories: ["subscription", "pharmacy", "hospital", "daily care"]
  },
  {
    label: "Investment",
    iconPath: require("../../images/investment-icon.png"),
    imgPath: require("../../images/investment-img.jpg"),
    categories: ["saving", "bond", "fund", "general investment", "insurance"]
  },
  {
    label: "Others",
    iconPath: require("../../images/other-icon.png"),
    imgPath: require("../../images/other-img.jpg"),
    categories: ["documentation", "covid test fee"]
  },
  {
    label: "Income",
    iconPath: require("../../images/income-icon.png"),
    imgPath: require("../../images/income-img.jpg"),
    categories: ["salary", "investment income", "part-time job", "allowance", "loans"]
  }
];

const styles = (theme) => ({
  root: {
    maxWidth: "65vh",
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 350,
    backgroundColor: "white",
  },
//   greyCircle: {
//     width: "80px",
//     height: "80px",
//     background: "#E5E5E5",
//     borderRadius: "50%",
//     marginLeft: "40%"
//   },
  icon: {
    height: "70px",
    width: "70px",
    display: "block",
    overflow: "hidden",
    marginLeft: "42%"
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: "100vh",
    overflow: "hidden",
    width: "100%"
  },
  btn: {
	borderRadius: "5%",
	color: "black",
	background: "#E3D1FF",
	border: 0,
	padding: "2.5% 2.5% !important",
	textAlign: "center",
    marginLeft: "5%",
    marginBottom: "5%",
    fontSize: "1rem"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>
                
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
                <Paper square className={classes.header}>
                    {/* <div className={classes.greyCircle}> */}
                        <img
                            className={classes.icon}
                            src={step.iconPath}
                            alt={step.label}
                        />
                    {/* </div> */}
                    <h2>{tutorialSteps[activeStep].label}</h2>

                    {step.categories.map((category)=>(
                        <button className={classes.btn}>{category}</button>
                    ))}
{/*                         
                        <button className={classes.btn}>HIIIII</button>
                        <button className={classes.btn}>HIIIII</button> */}
                </Paper>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
