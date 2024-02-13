

 const Login = ()=>{
    let options= [{label: 'self', value: 1},
        { label: 'son', value: 2 },
        { label:'daughter',value:3},
        {label:'sister', value:4},
        {label:'brother',value:5},
        { label: 'relative',value:6}

    ]


    return (<>
        <div style={{flex:'grid',background:'black', width:'30%', alignSelf:'center', textAlign:'center'}}>
            <div style={{marginBottom:'2%'}}>
                {/*<label>craete profile for</label>*/}
                <select placeholder={'select'}  Option={options}  >
                    {options.map((ele)=>{
                        return <><option value={`${ele.value}`}> {ele.label} </option> </>
                    })
                    }
                    {/*<option value={options} ></option>*/}

                </select>
            </div>
            <div style={{marginBottom:'2%'}}>
                <input placeholder={'mobile'}/>
            </div>
           <div style={{marginBottom:'2%'}} >
               <input placeholder={'username'}  type={'text'} />
           </div>
            <div style={{marginBottom:'2%'}}>
                <input placeholder={'password'} />
            </div>
            <div>
                <button style={{color:'orange'}}>register</button>
            </div>

        </div>




    </>)

 }


 export default  Login
