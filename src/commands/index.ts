import argsInfo from "./Args-Info";
import help from "./Help";
import Ping from "./Ping";
import Profile from "./Profile";
import Selfie from "./Selfie";

export default [
  new Ping(),
  new argsInfo(),
  new help(),
  new Profile(),
  new Selfie(),
];
