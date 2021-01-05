import React, { CSSProperties } from 'react';
import './App.css';
import  img from './oRcode.png' 

function App() {
    const [time,setTime] = React.useState<string>('');
    React.useEffect(()=>{
        const timer = setInterval(()=>{ 
            let month:string = (new Date().getMonth()+1).toLocaleString().padStart(2,'0');
            let day:string = new Date().getDate().toLocaleString().padStart(2,'0');
            let hour:string = new Date().getHours().toLocaleString().padStart(2,'0');
            let minute:string = new Date().getMinutes().toLocaleString().padStart(2,'0');
            let second:string = new Date().getSeconds().toLocaleString().padStart(2,'0');
            let date = month + '月' + day + '日' + ' ' + hour+":"+minute+":"+second;
            setTime(date);
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div className="App">
        <div style={{margin:'40px 0',textAlign:'center'}}>
            <img src="https://e.zufe.edu.cn/zcxs/resources/jkm/images/text.png" alt="" width={'88%'} height={'auto'}/>
        </div>
        <div style={contentBox}>
            <div  style={topTitle}>
                    <p style={{fontSize:'1.0rem',margin:'0'}}>{'姓名：' + decodeURI(window.location.search.substring(1).split('&')[0].split('=')[1])}</p>
                    <p style={{fontSize:'1.0rem',margin:'0'}}>单位：信息管理与人工智能学院</p>
            </div>
            <div style={{position:'absolute',right:'20px',top:'10px',cursor:'pointer'}}>
                    <img src="https://e.zufe.edu.cn/zcxs/resources/jkm/images/an1.png" alt="" onClick={()=>{window.location.reload();}}/>
            </div>
            <div style={nowTime}>
                {time}
            </div>
            <div style={{width:'90%',margin:'15px auto',textAlign:'center'}}>
                <img src={img} alt="" width={250} height={250}/>
            </div>
            <div style={{textAlign:'center',paddingTop:'20px'}}>
                <a href="https://e.zufe.edu.cn/infoplus/form/XSCWJCSQ/start?back=1&x_posted=true" target="_blank">晨午晚检测申报</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={"https://e.zufe.edu.cn/zcxs/getList?account=" +decodeURI(window.location.search.substring(1).split('&')[1].split('=')[1])} target="_blank">查看申请记录</a>
            </div>
        </div>
        </div>
    );
}

const contentBox:React.CSSProperties ={
    width:'90%',
    height:'480px',
    borderRadius:'10px',
    boxShadow:'0 0 8px rgba(0, 0, 0, 0.4)',
    backgroundColor:'white',
    margin:'0 auto',
    position:'relative'

}
const topTitle:React.CSSProperties ={
    width:'79%',
    margin:'0 auto',
    lineHeight:'30px',
    marginLeft:'10px'
}
const nowTime:React.CSSProperties ={
   width:'90%',
   margin:'0 auto',
   textAlign:'center',
   lineHeight:'24px',
   fontSize:'2.0rem',
   color:'black',
   fontWeight:'bold',
   marginTop:'8px'
}






export default App;
