import React from 'react'
import '../styles/Edu.css'

const EduQuali=[
  {"title" : "Masters in Science (2023-2024(Expected))", "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABEVBMVEUCWrv///////0AXLz8//8CW7kASKzJ4vEAUbW5zd0AUbebt9KFqNH+/vsAVLkAWbujwdyNq8s4ba2bvMwAVqro+PpLfLdIfbVkkskAUbsAULH///n3///l8/0AXMKxzeUAXbgAXrbO5up/pMIAVLUARaoAUK4AVLEASqYATKOxzeYATbkATbMAWcL/+v692ukAWqmpzN5Yj7uBp75Sh8liks3b8fdlkMBtl8QARpgAQ59vmLtAdbAycr6AoMjv9vwUXafB4OwAU5gAO6KHstHL6/cuY6NPh7cATZqQvthdhbwvbK3///Di//+ZtdG0xNbc5OeXrL5AeKgubaoARrgLWJucxtqx3vBjh6qjzNODuNcxPMieAAAL4ElEQVR4nO2cgX/SSBbHk0xCkToZtMQWMo4ToBQsAaoruLXrtl6t2lZ3r3eru/f//yH3Ji00hIRACKznve/Hj0VLZuaXeTPzZt5LNA1BEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB/v9gmmXlW6JFSPCTBD/Joh80wqTlpzVGWkJdpC5bpGT4Cc2RMl+FUloZgBvta54mUgpXd0CQZYr1pGWnlboUrNpsFUvFZampvzTp+Wx+8cKyxEFt8XJLxUM7Xytlte0HWTmq+F5aW5gl7MZyxb7QLJmnwnZdzwqv+JZMkyhZ6cFyxb60RYphLKvQMHQjo0KYbUhK+VIWj5YrtlFKKRMV5qpQ+x9QWKhTai6s0FCEFKb2obDSFYaKDBTa+Sqs1alrBpWYt8ztUJdSaozhLeaxlEkBHBSYaYwQs4VSl5uTr+jmyybJdbUoKIUGDVqux7cgBNwBI/iygndsIlPKtzSYSydXqOtjCtXhN+OvUONlNW2RXU4hrBb3tUL51Ihpw30fhv/BK7bvpZTvEVaaslIQE8Vw3VCl0If5+qXNn0Z7r/YUr17tPTzj8xQa+vDR69HeBDYQqcshkezJ/RWjN30+Uyzl5VCpoysrX4XMbtolW8GY1fy5DyaTYKhgnk6nZvv2mKbwtDR7spQdT67w/eZxmUZHgvlmv1q1Q+S64kfkshPecxMUUpM+Kq1cNzt1ecRMhh/J+iRFERXHSOpDmHJvmivXwI6f8shQfNYSLOcdYTKk6Ljx+nQTFO7aK9fACk/NiJU87/pgzTm0fpHqvZbj9pIUUlC4ckNAoeFOW+mzmtiYQo1VHDdhSVSt2l19vKg+jAyEQGEOjV+s/oozM9WN6eWmUI9RuME+TFSYXx9+twqNH17hj9+HqHCxGlDhmkGFqHCBGv5fFZLvQmF4xWdLRzrGgYl/zPql+9WabadcBzv01O32ygpDfch+eZiVt7+qE69wqVsLXTc66bSbsPtf0UdfVKG9p887sFoHJnf6jdPWJNC4boUj2GsY2dCjJ7ILXdRz3WuqO19PD4hYJby4hEIzk7xgBGZQSKk6q4ZNuNP42VplPC5lpWYm4gxwoasM6prccPWjzkb6EBTSTY/Ecd/XBxazsnbk961QoSIbZz8T7cdVSHXT1T+1RNZz8SUUZgw6roxpugY/sTOvi8kKwRO5Py9lj8v39B3dMGcDLncY+lZ5il/NyIr/ezmGZ1tcHbNPzUx3V1HT7ReyWql14CQZn0ld/XJyImzVblH5Ie13Z3qSQgPM6tF+7Z4ieG26G/Haiq1ibYpSt9YZfHL0hCAK5Rcy65LRGupz+nA0OdVXaU5MuRcqN0q8c5IiVoHCErlHm/W8n9eIpZEwqgJNHJ4OpwNv96Wa5wdZrbTYT1KozoQbxbDCAEtKS9SO5iq0IwojnvfzoogotKQnNUtWPr43qRtXsnFWkBkV2tuJ0TXoxfJE4SRLS23tSGsnad4BbwQUhvO6Ys68W5rUpnK/BJMWg16sXjjREMBtS6hTTIvNJir8kLgGQF31gpREm5rGmEq2q+4kOeLgboGVhr9feKrC6qHW6uVubFMIY6z16NqNyaMwdF6RGRWKj06SQh2cpooV59nLeQqNiML2U1jQJo1Wl039fho24HHRPlB4mlEhE62jGO//rlxDfxObJ7GUwg43Q8EfExyHUXLMjhTO4uYFo8d/yajQEv7NvDh+vS0sMdOLyyi0n1Aj1C2Uu/w0eeK3ulByrMJBVoXSL5yBEcWESW+79vJAMmKR6Uj7wgrBxFvn8D/3jYZRdtZOVijjFequ08yokHnk8IMZlxJyx7AjJFGJv1kUgr8sOsNIW/XGnMCyPNyJndvdejfjeuhbnig8c5Mi3eAwlfcFsyJpyosqZKLiX0Z/73TmnEqQ7pYekzlh6NuljAqF5ln+YJiUy0evdf1LAZbn6eIXtlJmfRxOmwd4J9V5CmEujVFI+VUz42mNpTEwwhMzoRMNtc/+1LEjk02qwltHDPyD7nakue6wlehhBuuhS2OslG4V0lIGk1EreOsFd6MZg5Mm6/rWVRcaC/UrV0stkGkrflX5PRZjpNCYsrmebvDdakxmPiOeR1RS4IVjhgSqTy5VrseuyqPPDhOdNxwM1Y05NQraxb8OamCqwg8OE8CLPJyvsGhJSwrf77zk4TlM3cPzDok50GcMpmvLG3w8Aw9vumSqJqcHbZl5b3GrULQuHfc6vs3gFILGoxfvWiU7OJ8FNznFSqsCOtsu7MKsEd4qUIPvFIhnxR0sMZjPSoMtnboRhTDRu8MBIZ5cRSFQunqflFdrmj16TfnnfuPJoNVtt4p2c14fgsLDaq3z7kWf08jumn/aL1WLNbsUpWiXau1Kw9F71Ajtge8u/nxig9ud1fMOgFEmtXaZQ+lxCweMA/N2lJpO/Xn5y8O3owd60g4Yvvfb20flrbvdrBnW+Ps/v2xvw59Y+k4w6MzxjXZdUMvNa/r55gCat3KemJSifVI3gxoSM91C3Zp8apPPcQ7cKc7VbtN8f9Gc9RszdSO4qPujujJ7N9HDuZOQcgvy0EjVFAoG9fm8wzSZh0Lfhm02bN4v+zz2mHpawvoVmupW82FjcCCJN8hBoHrASlNbc3v/aie0Y7yPlAQD8X7NTL8NK2IY9T//OO7asLbkE029XdJBItFqx7vlIYwBZauwvMGApypOouYMI9lFXwfD8m7BZrAU5ptwS5jWrNYu3j4AlXAnYTqDKRbmWDW1BTpT0vvzA1wQXn/R9kUl30xGBg4A9Khd3T998ak/dMzAPVXiqBs8fJE60+ZGUFN/UMo36M8ILBxqw+RJVj0stgb/2muU+2dPOcxAfMORCzX6KXV2i+nNXkYhLI1qSAoVQg9Gp20XW5122zs9+fDh9euHDx/Cql1P9GnAhvtJi/o8ng1Nvafmr9DuST2xA5bjjIowFGWuMmdk3xI8OlAslpr/TvHaZtyyNKrV9sebM24Ey+DUKFCuuHOibS4BJ2Du7smYd1qYVCATmvRhhzO7OTQN8MWHFc9bZfe0NMucCC+EevhaDvzDm6nt4X2RxoPOBh/R0FL2+FkUEtj+Epjdaq/VhD2lMXjGrmc+8eUahCSyzHnpYgShLTDW4350f3hnqlvF76cPMykcw27MuKiWSfnV6g+3LMH6FIrOMM5lUgGtfBfFFNaosHUUZ6Wua/R/EIVWcyeuD01Kf50TC8ifNSr0d+JiTzA4+eDHUKgesY05EVPbm41ONWsch+2hGaeQfk8Ks6z4t8BG17+KcdyUQsP8ZdNWmsAKfajiBd2yy+MipG6Pt3IWMb8t1fg45koKmU+k6kIeF+V29WFho05N8bf8FVqD6uEfQxhwcZkKpnu00T5k7WFcHDNoi5HZSmXtYqh2vHE+je6+WvdTp0L4lrjdB2va8WveSziPgrttPCqxWET8fyt8v9otND4H28GYOYxTp7jmHTDzTh7fPFZcPX58+ZVHH8+e4HLX3b54nMCTBHZvdt98deblO56Xcn1b1iz2XjgH26W9pMgM9ADlmXLB6TXt9ZLu27Ai167QMMwevXuXC9V7CY+467BwTd5sksRdMv74Q3A+2QtiAaoX40SaH8S6z2lAYc9UjXKDl7IoZz/JoFwenJEthRGkg81E9ozx8fN5TRNW/u/mm1YYzvM21nPwPVOoSV2jB7esvG8x0pat5hot9W/JZFfniuoU+kubaPbVt6NvP2nrM9W/RyFVzwYNL7tEiu63N8/+PPtjbQL/pqcRwG9ytt81BfGI/Ov1758al+vbX9gjNcdsUBwNprL6+aAkpGQeaX8bbf3518kaX9Xz0/uts62N0i83Ljp3Z4ieKI6+Nf76T2uN3rfVKRSOC5ujfVCzbSbuXoIihTg4fXXSWePrlqAiIRgZZ9hr409r/AC+qhynKFgqcOuz1VNO5kE8ucSLV1eFBK+R1Yh158qozySaIpm3Qk1LbVeOBAG9jT3wjSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAh/gvWs0hvnfrv2QAAAABJRU5ErkJggg==", "institute": "University at Buffalo, SUNY, USA","stream" : "Computer Science and Engineering (AI/ML Track)", "marks" : "-"},
  {"title" : "Bachelor of Technology (2018-2022)", "logo": "https://media.licdn.com/dms/image/C560BAQEu9UePvcrm9Q/company-logo_200_200/0/1617375168794?e=2147483647&v=beta&t=DtF1C44UjA8ft5XGrw0hhm8st8BRfF7SWz1MqweviVw", "institute": "Mahatma Gandhi Institute of Technology, INDIA","stream" : "Computer Science and Engineering", "marks" : "7.95 CGPA"},
  {"title" : "Intermediate MPC (2018)", "logo": "https://media.glassdoor.com/sqll/502833/sri-chaitanya-educational-institutions-squarelogo-1429194720858.png", "institute": "Sri Chaitanya Junior Kalasala", "stream" : "Maths Physics Chemistry", "marks" : "97.20%"},
  {"title" : "High School -General (2016)", "logo": "https://yt3.ggpht.com/ytc/AMLnZu86uem0AyakR5DI2oFkMbt2yYArwxI8o3YI3NAY=s900-c-k-c0x00ffffff-no-rj", "institute": "Sri Chaitanya Schools", "stream" : "SSC General", "marks" : "9.3 GPA"},
]

function Edu() {
  return (
    <div className='edu'>
            <div className='title'>EDUCATIONAL QUALIFICATION</div>
            <div className='inst'>
             {
                EduQuali.map((data)=>{
                  return (
                    <div className='study'>
                      <div className='heading'>
                        {data.title}
                      <img className='inst_img' src={data.logo} alt='inst img' width="150" height="150"></img>
                      <div className='content'>{data.institute}</div>
                      <div className='content'>{data.stream}</div>
                      <div className='heading'>{data.marks}</div>
                      </div>
                    </div>  
                  )
                })
               }   
            </div>
    </div>
  )
}

export default Edu