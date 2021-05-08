import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  profileImage: {
    width: "210px",
    height: "210px",
    borderRadius: "999em"
  },
  content: {
    justifyContent: "left",
    textAlign: "left"
  },
  details: {
    marginTop: "-20px"
  },
  about: {
    margin: "10px 0",
    alignItems: "left",
    textAlign: "left"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [followers,setFollowers]=useState('');
  const [following,setFollowing]=useState('');
  const [avatar,setAvatar]=useState('');
  const [location,setLocation]=useState('');
  const [blog,setBlog]=useState('');
  const [id,setId]=useState('');
  
  useEffect(()=>{
      fetch('https://api.github.com/users/Huang-23')
        .then(res=>res.json())
        .then(data=>{
          setData(data)
        });
    },[]);
  const setData=({
    name,
    login,
    followers,
    following,
    avatar_url,
    location,
    blog,
    id
  })=>{
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setAvatar(avatar_url);
    setLocation(location);
    setBlog(blog);
    setId(id);
  };

  return (
    <div style={{ display:'flex', justifyContent:'center', padding:5}}> 
    <Card className={classes.root}>
      <React.Fragment>
      <div container>
        <img
          className={classes.profileImage}
          alt="Robert"
          src={avatar}
        />
        <div className={classes.content}>
          <Typography component="h1" variant="h4">
            {name}
          </Typography>
          <p>{username}</p>
          <Button variant="outlined" size="small" fullWidth>
            Edit profile
          </Button>
          <div className={classes.details}>
            <p>
            <br></br>
            <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>&nbsp;{followers}&nbsp;followers・{following}&nbsp;following
            </p>
          </div>
          <div className={classes.about}>
            <p>
              <LocationOnOutlinedIcon></LocationOnOutlinedIcon>&nbsp;{location}
              <br></br>
              <LinkIcon></LinkIcon>&nbsp;{blog}
              <br></br>
              <GitHubIcon></GitHubIcon>&nbsp;{id}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
    </Card>
    </div>
  );
}