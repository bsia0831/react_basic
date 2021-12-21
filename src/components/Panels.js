const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Sesonal', 'Vespers'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

function Panels() {
    return(
    <>
            <button>button</button>
            <section>
                {
                    arr.map((data, index)=>{
                    let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}
                    let imgSrc = `${path}/img/${data}.jpg`;
    
                    return(
                        <article style={style}>
                        <div className="inner">
                            <div className="pic">
                                <img src= {imgSrc}/>
                            </div>
                            <h2>{data}</h2>
                        </div>
                        </article>
                    )
                })
                }
            </section>
        </>
    )
}

export default Panels;