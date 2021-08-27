import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    addBall,
    removeBall,
    selectBalls,
} from './ballsSlice';

import styles from './Balls.module.css';


export function Balls() {
    const balls = useSelector(selectBalls);
    const dispatch = useDispatch();

    return (
        <>
            <button className={styles.add} onClick={() => {
                const title = prompt();
                dispatch(addBall(title))
            }}>
                Добавить шар
            </button>
            <button className={styles.remove} onClick={() => {
                dispatch(removeBall())
            }}>
                Удалить шар
            </button>
            <div className={styles.ballsContainer}>
                {
                    balls.map((ball) => (
                        <div className={styles.ball}>
                            {ball}
                        </div>
                    ))
                }
            </div>
        </>
    );
}
