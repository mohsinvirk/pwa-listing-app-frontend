import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ListAlt } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { ChatOutlined } from "@material-ui/icons";
import MyAdds from "./DashboardAds";
import Favorites from "./DashboardFavorites";
import Messsages from "./DashboardMessages";

export default class IconLabelTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div>
          <Paper style={{ width: "100%" }}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<ListAlt />} label="ADS" />
              <Tab icon={<ChatOutlined />} label="CHATS" />
              <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            </Tabs>
          </Paper>
        </div>
        {value === 0 && (
          <div styel={{ marginTop: "50px" }}>
            <MyAdds />
          </div>
        )}
        {value === 1 && (
          <div>
            <div styel={{ marginTop: "50px" }}>
              <Messsages />
            </div>
          </div>
        )}
        {value === 2 && (
          <div>
            <div>
              <div styel={{ marginTop: "50px" }}>
                <Favorites />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
