import { Avatar, Badge, IconButton } from "@mui/material";

function OnlineFriends(){
    return(
        <div className="p-2 flex overflow-x-auto w-full gap-1">
            {/* <IconButton>
            <Avatar sx={{ width: 50, height: 50 }} src="https://picsum.photos/200/200"/>
            </IconButton> */}

            <IconButton>
            <Badge variant="dot" overlap="circular" color="primary" badgeContent=" ">
            <Avatar sx={{ width: 50, height: 50 }} src="https://picsum.photos/200/201"/>
            </Badge>
            </IconButton>

            <IconButton>
            <Badge variant="dot" overlap="circular" color="primary" badgeContent=" ">
            <Avatar sx={{ width: 50, height: 50 }} src="https://picsum.photos/200/202"/>
            </Badge>
            </IconButton>

        </div>
    )
}
export default OnlineFriends