import styles from "./Separator.module.scss";

type SeparatorProps = {
  text?: string;
};

const Separator: React.FC<SeparatorProps> = ({ text }) => (
  <div className={styles.separator}>{text}</div>
);

export default Separator;
