// App.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54"),
  );

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <h1>Material UI Components.</h1>

      <h2>Buttons -</h2>
      <Button>Click Me</Button>
      <Button color="secondary">Secondary</Button>
      <Button href="https://www.google.com" color="primary">
        Link
      </Button>
      <Button disabled>Disabled</Button>

      <h3>Contained Buttons</h3>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" href="https://www.google.com" color="primary">
        Link
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>

      <h3>Outlined Buttons</h3>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" href="https://www.google.com" color="primary">
        Link
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>

      <h3>Button Sizes</h3>
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
      <Button variant="contained" color="primary" size="medium">
        Medium
      </Button>
      <Button variant="contained" color="primary" size="large">
        Large
      </Button>

      <h3>Buttons with Icons</h3>
      <Button variant="contained" color="primary" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="outlined" color="secondary" endIcon={<FavoriteIcon />}>
        Favorite
      </Button>

      <h3>Icon Buttons</h3>
      <IconButton color="primary">
        <AddIcon />
      </IconButton>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary">
        <EditIcon />
      </IconButton>
      <IconButton color="secondary">
        <FavoriteIcon />
      </IconButton>

      <h3>Custom Button</h3>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF5722", color: "white" }}
      >
        Custom
      </Button>

      <h3>Button Groups</h3>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Vertical Button Group</h3>
      <ButtonGroup orientation="vertical" variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Floating Action Buttons</h3>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab color="error">
        <DeleteIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab color="primary" disabled>
        <FavoriteIcon />
      </Fab>

      <h3>Checkboxes</h3>
      <Checkbox defaultChecked color="primary" />
      <Checkbox color="secondary" />
      <Checkbox color="error" />
      <Checkbox defaultChecked indeterminate color="default" />
      <FormControlLabel
        control={<Checkbox defaultChecked color="primary" />}
        label="Primary"
      />

      <h3>Radio Buttons</h3>
      <Radio value="a" checked name="radio-buttons" />
      <Radio value="b" name="radio-buttons" />
      <Radio value="c" name="radio-buttons" />

      <h2>Date and Time Pickers -</h2>
      <h3>Desktop Date Picker</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Desktop Date"
          inputFormat="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h3>Mobile Date Picker</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Mobile Date"
          inputFormat="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h3>Desktop Time Picker</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopTimePicker
          label="Desktop Time"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h3>Mobile Time Picker</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          label="Mobile Time"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <h2>Sliders -</h2>
      <h3>Slider</h3>
      <Slider defaultValue={30} />

      <h3>Range Slider</h3>
      <Slider defaultValue={[20, 40]} />

      <h2>Switch -</h2>
      <h3>Switch</h3>
      <Switch defaultChecked color="primary" />
      <Switch color="secondary" />
      <Switch color="error" />

      <h2>Rating -</h2>
      <h3>Rating</h3>
      <Rating defaultValue={4} precision={0.5} />

      <h2>Box -</h2>
      <h3>Box</h3>
      <Box>Hello</Box>

      <h2>Alignment -</h2>
      <h3>Alignment</h3>
      <Box textAlign="left">Left</Box>
      <Box textAlign="center">Center</Box>
      <Box textAlign="right">Right</Box>

      <h2>Font -</h2>
      <h3>Font Weight</h3>
      <Box fontWeight="fontWeightBold">Bold Text</Box>
      <Box fontWeight={500}>Medium Text</Box>

      <h3>Font Size</h3>
      <Box fontSize={20}>Custom Font Size</Box>

      <h2>Color -</h2>
      <h3>Color</h3>
      <Box color="primary.main">Primary</Box>
      <Box color="secondary.main">Secondary</Box>
      <Box color="error.main">Error</Box>
      <Box color="warning.main">Warning</Box>
      <Box color="info.main">Info</Box>
      <Box color="success.main">Success</Box>

      <h3>Background Color</h3>
      <Box bgcolor="primary.main" color="white">
        Primary Background
      </Box>
      <Box bgcolor="secondary.main" color="white">
        Secondary Background
      </Box>
      <Box bgcolor="error.main" color="white">
        Error Background
      </Box>
      <Box bgcolor="warning.main" color="white">
        Warning Background
      </Box>
      <Box bgcolor="info.main" color="white">
        Info Background
      </Box>
      <Box bgcolor="success.main" color="white">
        Success Background
      </Box>

      <h2>Margin -</h2>
      <h3>Margin</h3>
      <Box m={1}>All Side Margin</Box>
      <Box mt={2}>Margin Top</Box>
      <Box mb={3}>Margin Bottom</Box>
      <Box ml={4}>Margin Left</Box>
      <Box mr={5}>Margin Right</Box>
      <Box mx={6}>Margin X-axis</Box>
      <Box my={7}>Margin Y-axis</Box>

      <h2>Padding -</h2>
      <h3>Padding</h3>
      <Box p={1}>All Side Padding</Box>
      <Box pt={2}>Padding Top</Box>
      <Box pb={3}>Padding Bottom</Box>
      <Box pl={4}>Padding Left</Box>
      <Box pr={5}>Padding Right</Box>
      <Box px={6}>Padding X-axis</Box>
      <Box py={7}>Padding Y-axis</Box>

      <h2>Height -</h2>
      <h3>Height</h3>
      <Box height="3%" bgcolor="yellow">
        Height 3%
      </Box>
      <Box height={200} bgcolor="red">
        Height 200px
      </Box>

      <h2>Width -</h2>
      <h3>Width</h3>
      <Box width={1 / 4} bgcolor="red">
        Width 1/4
      </Box>
      <Box width={500} bgcolor="blue">
        Width 500px
      </Box>
      <Box width="50%" bgcolor="green">
        Width 50%
      </Box>
      <Box width={1} bgcolor="purple">
        Width 100%
      </Box>

      <h2>Border -</h2>
      <h3>Border</h3>
      <Box border={1} borderColor="primary.main">
        Border 1px
      </Box>
      <Box border={2} borderColor="secondary.main">
        Border 2px
      </Box>
      <Box border={3} borderColor="error.main">
        Border 3px
      </Box>
      <Box border={4} borderColor="warning.main">
        Border 4px
      </Box>
      <Box border={5} borderColor="info.main">
        Border 5px
      </Box>
      <Box border={6} borderColor="success.main">
        Border 6px
      </Box>
      <Box border={7} borderRight={0} borderColor="primary.main">
        Border 7px
      </Box>

      <h3>Border Radius</h3>
      <Box
        borderRadius="50%"
        width={100}
        height={100}
        border={5}
        borderColor="primary.main"
      >
        Border Radius 50%
      </Box>
      <Box borderRadius={2} border={5} borderColor="secondary.main">
        Border Radius 50
      </Box>

      <h2>Avatar -</h2>
      <h3>Avatar</h3>
      <Avatar>A</Avatar>
      <Avatar alt="alex" src="https://mui.com/static/images/avatar/1.jpg" />

      <h2>Badges -</h2>
      <h3>Badge</h3>
      <Badge badgeContent={3} color="primary">
        <Avatar alt="alex" src="https://mui.com/static/images/avatar/1.jpg" />
      </Badge>
      <Badge badgeContent={6} color="secondary">
        <MailIcon />
      </Badge>
      <br></br>
      <Badge
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        badgeContent={51}
        color="error"
        max={50}
      >
        <MailIcon />
      </Badge>
      <Badge anchorContent={0} color="secondary">
        <MailIcon />
      </Badge>

      <Badge color="success" variant="dot">
        <MailIcon />
      </Badge>

      <h2>Chip -</h2>
      <h3>Chip</h3>
      <Chip label="Basic" color="primary" />
      <Chip label="disabled" disabled color="secondary" />
      <Chip
        avatar={
          <Avatar alt="alex" src="https://mui.com/static/images/avatar/1.jpg" />
        }
        label="Avatar Chip"
        color="error"
      />
      <Chip avatar={<Avatar>A</Avatar>} label="Word Chip" color="success" />

      <h3>Clickable Chip</h3>
      <Chip
        label="Click Karo"
        color="warning"
        onClick={() => alert("Clicked!")}
      />

      <h2>Divider -</h2>
      <h3>Divider</h3>
      <Divider />

      <h2>List -</h2>
      <h3>List</h3>
      <List>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Starred" />
        </ListItem>
      </List>

      <h2>Table -</h2>
      <h3>Table</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Roll no</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>30</TableCell>
              <TableCell>1</TableCell>
              <TableCell>New York</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane</TableCell>
              <TableCell>25</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Los Angeles</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob</TableCell>
              <TableCell>35</TableCell>
              <TableCell>3</TableCell>
              <TableCell>Chicago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Tooltip -</h2>
      <h3>Tooltip</h3>
      <Tooltip title="Delete">
        <Fab color="primary">
          <DeleteIcon />
        </Fab>
      </Tooltip>

      <h2>Typography -</h2>
      <h3>Typography</h3>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <h2>Progress -</h2>
      <h3>Progress</h3>
      <CircularProgress />
      <CircularProgress color="success" />
      <LinearProgress />
      <LinearProgress color="error" />

      <h2>Container -</h2>
      <h3>Container</h3>
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
        >
          This is a container with max width of sm
        </Typography>
      </Container>

      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#564768", height: "50vh" }}
        >
          This is a fixed container
        </Typography>
      </Container>

      <h2>Grid -</h2>
      <h3>Grid</h3>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Box bgcolor="yellow" p={10} textAlign="center">
            1
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box bgcolor="lightblue" p={10} textAlign="center">
            2
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box bgcolor="lightgreen" p={10} textAlign="center">
            3
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box bgcolor="lightcoral" p={10} textAlign="center">
            4
          </Box>
        </Grid>
      </Grid>

      <h3>Responsive Grid</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Item>{index + 1}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <h2>Hidden -</h2>
      <h3>Hidden</h3>

      <Box sx={{ display: { sm: "none", md: "block" } }}>
        <Typography variant="h3">Hidden on sm</Typography>
      </Box>

      <Box sx={{ display: { md: "none", lg: "block" } }}>
        <Typography variant="h3">Hidden on md</Typography>
      </Box>

      <Box sx={{ display: { lg: "none", xl: "block" } }}>
        <Typography variant="h3">Hidden on lg</Typography>
      </Box>

      <Box sx={{ display: { xl: "none" } }}>
        <Typography variant="h3">Hidden on xl</Typography>
      </Box>

      <h2>Paper -</h2>
      <h3>Paper</h3>
      <Paper elevation={0} style={{ padding: "20px", marginBottom: "20px" }}>
        Elevation 0
      </Paper>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        Elevation 3
      </Paper>

      <h2>Card -</h2>
      <h3>Card</h3>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Card title
          </Typography>
          <Typography variant="body2">Card content</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action 1</Button>
          <Button size="medium">Action 2</Button>
          <Button size="large">Action 3</Button>
        </CardActions>
      </Card>

      <h2> Accordion -</h2>
      <h3>Accordion</h3>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion content 1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion content 2</Typography>
        </AccordionDetails>
      </Accordion>

      <h2>Appbar -</h2>
      <h3>Appbar</h3>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abhishek Kumar Verma
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
