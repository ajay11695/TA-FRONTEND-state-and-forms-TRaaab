
function Sidevar(props) {
    let { allproduct, handleclickbtn } = props
    let allSize = allproduct.reduce((acc, cv) => acc.concat(cv.availableSizes), [])
    allSize = [...new Set(allSize)]
    // console.log(allSize)

    return (
        <aside className="flex-20">
            <div className="flex wrap">
                {allSize.map((size) =>
                    <button key={size} className={props.size===size?'active btn':'btn'} onClick={() => { handleclickbtn(size) }} value={props.size}>{size}</button>
                )
                }
            </div>
        </aside>
    )

}

export default Sidevar