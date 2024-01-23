export default function LettersAnimated ({letterClass, letters, idx}){
    return(
        <span>
            {
                letters.map((v, i) => (
                    <span key={v + i} className={`${letterClass} _${i + idx}`}>{v}</span>
                ))
            }
        </span>
    )
}