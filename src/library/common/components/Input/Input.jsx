import React, {forwardRef} from 'react';

const Input = (props, ref) => {
 
    return (
        <input
            id={props.id}
            ref={ref}
            disabled={props.disabled}
            onChange={props.onChange}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            checked={props.checked}
            className={props.class}
            onClick={props.onClick}
            accept={props.accept} 
          />
    )
}
export default forwardRef(Input);