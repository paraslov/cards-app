import React, {useState} from 'react'
import SuperButton from '../n4-common/components/Elements/e1-SuperButton/SuperButton'
import SuperCheckbox from '../n4-common/components/Elements/e2-SuperCheckboxe/SuperCheckbox'
import SuperInputText from '../n4-common/components/Elements/e3-SuperInputText/SuperInputText'

export const Test = () => {

    const [text, setText] = useState('')
    const [check, setCheck] = useState(false)

    function onClickHandler() {
        alert(`Your test is ${text}. Checked is ${check}`)
    }

    return (
        <div style={{padding: '40px'}}>
            <SuperInputText value={text} onChangeText={setText}/>
            <SuperCheckbox onChangeChecked={setCheck}/><br/>
            <SuperButton onClick={onClickHandler}>Send</SuperButton>
        </div>
    )
}