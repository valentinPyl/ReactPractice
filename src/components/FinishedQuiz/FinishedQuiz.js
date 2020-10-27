import React from 'react';
import classes from "./FinishedQuiz.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === "success") {
            total++;
        }

        return total;
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>

                { props.quiz.map((questionObj, index) => {
                    const cls = [
                        "fa",
                        props.results[questionObj.id] === "error" ? "fa-times" : "fa-check",
                        classes[props.results[questionObj.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {questionObj.question}
                            <i className={cls.join(" ")}></i>
                        </li>
                    )
                })
                }
            </ul>

            <p>Correct: {successCount} / {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRestart} type="primary">Restart</Button>
                <Button onClick={props.onRestart} type="success">Test list</Button>
            </div>
        </div>
        
    )
}

export default FinishedQuiz;