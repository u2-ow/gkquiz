import Link from "next/link";


type Props = {
    children:string;
    className:string;
}

export default function LevelButton({children,className}: Props) {
  return (
    <Link href='/japanese/q1' className={className}>
        <span className="levelBtnInner">{children}</span>
    </Link>
  )
}