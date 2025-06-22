import {useState, type ReactNode} from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface LinkItem {
  url: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

const LinkList = ({links}: {links: LinkItem[]}) => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleOpen = (description: string) => {
    setDialogContent(description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogContent("");
  };

  return (
    <>
      <List>
        {links.map((link, index) => (
          <ListItem key={index} divider>
            {link.icon && <span style={{marginRight: "8px"}}>{link.icon}</span>}
            <ListItemText
              primary={
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: "none", color: "inherit"}}
                >
                  {link.title}
                </a>
              }
            />
            {link.description && (
              <IconButton
                aria-label="info"
                color="primary"
                onClick={() => handleOpen(link.description!)}
              >
                <InfoIcon />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          <Typography>{dialogContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LinkList;
