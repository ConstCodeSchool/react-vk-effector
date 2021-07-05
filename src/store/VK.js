/* global VK */
import config from "config";

VK.init({ apiId: config.get("APP_ID") });

export default VK;
