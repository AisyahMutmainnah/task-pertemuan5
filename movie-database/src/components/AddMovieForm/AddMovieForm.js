import styles from "./AddMovieForm.module.css";



function AddMovieForm() { 
    return(
        
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} 
                    src="https://picsum.photos/400/300" alt=""/> 
                </div> 

                <div className={styles.AddMovieForm__right}>
                    
                    <h2 className={styles.AddMovieForm__title}>Add Movie</h2> 
                    <form className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label} htmlFor="">Title</label> 
                            <br/>
                            <input className={styles.AddMovieForm__input} type="text"/> 
                            <br/>
                            <br/>    
                            <label className={styles.AddMovieForm__label} htmlFor="">Year</label> 
                            <br/>
                            <input className={styles.AddMovieForm__input} type="text"/> 
                            <br />
                            <button className={styles.AddMovieForm__button}>Submit</button> 
                    </form>
                </div>
            </section> 
        </div> 
    ); 
} 

export default AddMovieForm;
