

type Props = {
    children:string;
    className:string;
}

export default function LevelButton({children,className}: Props) {
  return (
    <button className={className}>
        <span className="levelBtnInner">{children}</span>
    </button>
  )
}