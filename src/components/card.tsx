import React from 'react'
import styles from "../../styles/Home.module.css"
import Image from "next/image"
import { IinitialState } from '../types/types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

interface ICardProps extends IinitialState{
    id: string
    delFn: any
    editFn: any
}
function Card(props: ICardProps) {
    return (
        <div className={styles.cardWrapper}>
            <FontAwesomeIcon className={styles.deleteIcon} onClick={() => props.delFn(props.id)} icon={faTrash}></FontAwesomeIcon>
            <FontAwesomeIcon className={styles.editIcon} onClick={() => props.editFn(props.id)} icon={faPen}></FontAwesomeIcon>
            <Image src={props.course_image} alt="Course Image" width="330" height="200" className={styles.cardImage} />
            <div className={styles.cardContent}>
                <p className={styles.cardtitle}>{props.course_name.length > 25 ? props.course_name.slice(0,25) : props.course_name} </p>
                <p className={styles.author}>{props.author}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p>⏰ 30 hrs</p>
                    <p className={styles.level}>Basic</p>
                </div>
                <hr />
                <p className={styles.price}>₹{props.price}</p>
            </div>
        </div>
    )
}

export default Card
