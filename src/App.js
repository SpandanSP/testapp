import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import imageData from './dataList.json'
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  shopping: {
    minHeight: "500px",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cart: {
    minHeight: "500px",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

// const addtoCart = (data) => {
//   console.log(data)
//   let tempData = [];
//   tempData.push(data);
//   this.setState({ cartItems: tempData })
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }



  render() {
    const { classes } = this.props;

    const addtoCart = (data) => {
      console.log(data)
      let cartData = this.state.cartItems;
      cartData.push(data);
      this.setState({ cartItems: cartData })
    }

    const removeFromCart = (data) => {
      console.log(data)
      let finalData = [];
      let cartData = this.state.cartItems;
      cartData.forEach(el => {

        if (el._id !== data._id) {
          finalData.push(el)
        }
      })

      this.setState({ cartItems: finalData })
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.shopping}>
              <Typography variant="h4" component="h2">
                Shopping
              </Typography>


              <ImageList rowHeight={200} gap={1} className={classes.imageList}>
                {
                  imageData.products.map((item) => (

                    <ImageListItem key={item._id}>
                      <img src={item.image} alt={item.title} />
                      <ImageListItemBar
                        title={item.title}
                        position="top"
                        actionIcon={
                          <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => addtoCart(item)}>
                            Add to Cart
                          </Button>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                      />

                    </ImageListItem>



                    // <div key={item.image}>
                    //   <img src={item.image} alt={item.title} />
                    // </div>
                  ))

                }




              </ImageList>


            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.cart}>
              <Typography variant="h4" component="h2">
                Cart
              </Typography>


              <ImageList rowHeight={200} gap={1} className={classes.imageList}>
                {
                  this.state.cartItems.map((item) => (

                    <ImageListItem key={item._id}>
                      <img src={item.image} alt={item.title} />
                      <ImageListItemBar
                        title={item.title}
                        position="top"
                        actionIcon={
                          <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => removeFromCart(item)}>
                            Remove
                          </Button>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                      />
                    </ImageListItem>


                    // <div key={item.image}>
                    //   <img src={item.image} alt={item.title} />
                    // </div>
                  ))

                }




              </ImageList>

            </Paper>
          </Grid>

        </Grid>
      </div>
    );
  }
}



export default withStyles(styles, { withTheme: true })(App);
