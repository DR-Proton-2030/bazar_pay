export interface IModalProps {
  open: boolean;
  label: string;
  content: string;
  handleClose: () => void;
  handleDelete: () => Promise<void>;
}
