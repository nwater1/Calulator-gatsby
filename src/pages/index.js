import * as React from "react"
import Button from '../components/Button'
import { useState } from "react"




// markup
const IndexPage = () => {

  const [numberText, setNumberText] = useState('0')
  const [tempText, setTempText] = useState('')
  const [operationText, setOperationText] = useState('')

  let displayScreen = numberText

  let resetValue = () => {
    setNumberText('0')
    setOperationText('')
    setTempText('')
  }

  let handelChildClick = (e) => {
    let numberCheck = /[0-9]/
    let dotCheck = /[\.]/
   
    /// Check 0-9 and . Only ///
    if (numberCheck.test(e) || dotCheck.test(e)) {
      if (operationText == '') {
        if (numberText == '0') {
          if (e == '.') {
            setNumberText(displayScreen + e)
          }
          else {
            setNumberText(e)
          }
        } else if (numberText != '0') {
          if (e == '.') {
            if (numberText.indexOf('.') == -1) {
              setNumberText(displayScreen + e)
            } else {
              setNumberText(displayScreen)
            }
          } else {
            setNumberText(displayScreen + e)
          }
        }
      } else {
          if (tempText != '' && numberText == '') {
            if (numberText == '0') {
              if (e == '.') {
                setNumberText(displayScreen + e)
              }
              else {
                setNumberText(e)
              }
            } else if (numberText != '0') {
              if (e == '.') {
                if (numberText.indexOf('.') == -1) {
                  setNumberText(displayScreen + e)
                } else {
                  setNumberText(displayScreen)
                }
              } else {
                setNumberText(displayScreen + e)
              }
            }
          } else {
            if (tempText != '' && numberText != '' ) {
              if (numberText == '0') {
                if (e == '.') {
                  setNumberText(displayScreen + e)
                }
                else {
                  setNumberText(e)
                }
              } else if (numberText != '0') {
                if (e == '.') {
                  if (numberText.indexOf('.') == -1) {
                    setNumberText(displayScreen + e)
                  } else {
                    setNumberText(displayScreen)
                  }
                } else {
                  setNumberText(displayScreen + e)
                }
              }
            } else if (tempText == '' && numberText != ''){
                if (e != '.' ) { 
                  setTempText(numberText)
                  setNumberText('')
                  displayScreen = ''
                  if (numberText != '0') {
                    if (e == '.') {
                      setNumberText(displayScreen + e)
                    }
                    else {
                      setNumberText(e)
                    }
                  } else if (numberText != '0') {
                    if (e == '.') {
                      setNumberText('0')
                      if (numberText.indexOf('.') == -1) {
                        setNumberText('0' + e)
                      } else {
                        setNumberText(displayScreen)
                      }
                    } else {
                      setNumberText(displayScreen + e)
                    }
                  }
                } 
                /// check . input once time ///
                
                /// end ///
            }
          }
      }
      ///// Check operator /////
    } else if (e == '+' || e == '-' || e == 'X' || e == '%') {
      if (numberText != '' && tempText != '') {
        setOperationText(e)
        let value1 = parseFloat(tempText)
        let value2 = parseFloat(numberText)
        let total = 0
        if (operationText == '+') {
          total = value1 + value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == '-') {
          total = value1 - value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == 'X') {
          total = value1 * value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == '%') {
          total = value1 / value2
          setTempText('')
          setNumberText(total)
        }

      } else {
        setOperationText(e)
      }
      ///// Check = and Sum value /////
    } else if (e == '=') {
      if (tempText != '' && numberText != '') {
        let value1 = parseFloat(tempText)
        let value2 = parseFloat(numberText)
        let total = 0
        if (operationText == '+') {
          total = value1 + value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == '-') {
          total = value1 - value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == 'X') {
          total = value1 * value2
          setTempText('')
          setNumberText(total)
        } else if (operationText == '%') {
          total = value1 / value2
          setTempText('')
          setNumberText(total)
        }
      }
      
    }
   
  }

  let convertToScreen = (textString) => {
    return Array.from(textString).reverse().join('')
  }
  return (
    <div className="container">
      <h1 style={{textAlign: "center"}}>My Calculator</h1>
      <div style={{width: "400px", margin: "20px auto"}}>
        <div style={{width: "398.2px", height: "100px",backgroundColor: "lightpink", border: "solid black 0.5px"}}>
          <h1 style={{textAlign: "right"}}>{displayScreen}</h1>
        </div>
        <div>
          <Button titleName="7" onChildClick={handelChildClick}></Button>
          <Button titleName="8" onChildClick={handelChildClick}></Button>
          <Button titleName="9" onChildClick={handelChildClick}></Button>
          <Button titleName="%" onChildClick={handelChildClick}></Button>
        </div>
        <div>
          <Button titleName="4" onChildClick={handelChildClick}></Button>
          <Button titleName="5" onChildClick={handelChildClick}></Button>
          <Button titleName="6" onChildClick={handelChildClick}></Button>
          <Button titleName="X" onChildClick={handelChildClick}></Button>
        </div>
        <div>
          <Button titleName="1" onChildClick={handelChildClick}></Button>
          <Button titleName="2" onChildClick={handelChildClick}></Button>
          <Button titleName="3" onChildClick={handelChildClick}></Button>
          <Button titleName="-" onChildClick={handelChildClick}></Button>
        </div>
        <div>
          <Button titleName="0" onChildClick={handelChildClick}></Button>
          <Button titleName="." onChildClick={handelChildClick}></Button>
          <Button titleName="=" onChildClick={handelChildClick}></Button>
          <Button titleName="+" onChildClick={handelChildClick}></Button>
        </div>
        <div>
          <button onClick={resetValue} style={{width: "400px", height: "50px", backgroundColor: "lightsalmon"}}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

/// to do when click opertion continue if not click equal operation
//chenck decimal 32.12 - 0.12 = 32.99999996
