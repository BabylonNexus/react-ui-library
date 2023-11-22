import React, { useCallback, useEffect, useRef, useState } from "react"
import { IOption, SelectProps } from "./Select.types"
import { styled } from "styled-components"
import classNames from "classnames"
import { faChevronDown, faX } from "@fortawesome/free-solid-svg-icons"
import CustomIcon from "../Icon"
import Card from "../Card"
import debounce from "../../utils"
import { useReferredState } from "../Hooks/useReferredState"


const SelectWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    &.disabled{
        pointer-events: none;
        opacity: 0.6;
    }
`

const ControlContainer = styled.div`
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    color: var(--select-color);
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 48.59px;
    padding: 0.8rem;
    position: relative;
    transition: all 0.15ms ease-in-out;
    background-color: var(--select-bg-color);
    border:1px solid var(--select-border-color);
    border-radius: 0.3rem;
    box-sizing: border-box;
    outline: 0px !important;


    &:hover{
         border-color: var(--select-hover-color);
    }

    &.focused{
        border-color: var(--select-hover-color);
        box-shadow:0 0 0 0.1rem var(--input-focus-color);

           label{
            font-size: 12px;
            top:2px;
        }
    }

    &.invalid{
            border-color:var(--input-error-color);
            
            &.focused{
                box-shadow:0 0 0 0.1rem var(--input-error-color);
            }
    }
    
`


const ValueContainer = styled.div<{ $display: string }>`
     -webkit-box-align: center;
    align-items: center;
    display: ${props => props.$display ?? "flex"};
    flex: 1 1 0%;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    &.with-icon{
        padding-left: 30px;
    }

    &.multiselect{
        padding-top: 10px;
    }
`

const IndicatorsContainer = styled.div`
    -webkit-box-align: center;
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
`

const IndicatorContainer = styled.div`
    display: flex;
    transition: color 150ms ease 0s;
    padding-left: 0.5rem;
    padding-right:0.5rem;
    box-sizing: border-box;
`

const IndicatorSeperator = styled.span`
    align-self: stretch;
    width: 1px;
    background-color: rgb(204, 204, 204);
    box-sizing: border-box;
`

const Placeholder = styled.label<any>`
    top:${props => props.$hasValue ? "2px" : "14px"};
    position: absolute;
    
    font-size:${props => props.$hasValue ? "12px" : "18px"};;
    grid-area: 1 / 1 / 2 / 3;
    color: var(--select-placeholder-color);
    margin-left: 2px;
    margin-right: 2px;
    box-sizing: border-box;
    font-weight: 400;
    transition: 0.15s ease-in-out all;


    &.with-icon{
        padding-left: 30px;
    }

    &:after{
    content: ${(props) => (!props.$hasvalue && props.$isrequired ? "'*'" : "")};
    color:var(--input-asterisk-color);
  }
`

const OptionsContainer = styled(Card)`
    position: absolute;
    width: 100%;
    padding: 0;
    max-width: unset;
    background-color: #fff;
    top:110%;
    left:0;
    max-height: 300px;
    overflow: auto;
    z-index: 100;

`

const OptionList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const SearchWrapper = styled.div`
    flex: 1 1 auto;
    display: inline-grid;
    grid-area: 1 / 1 / 2 / 3;
    grid-template-columns: 0px min-content;
    box-sizing: border-box;
`
const SearchInput = styled.input`
    color: inherit;
    width: auto;
    background: 0px center;
    grid-area: 1 / 2 / auto / auto;
    font: inherit;
    border: 0px;
    margin: 0px;
    outline: 0px;
    padding: 0px;
`
const OptionItem = styled.li`
    padding: 0.7rem;
    transition: .15s ease-in-out;

   &.focused{
         background-color: var(--select-item-hover-color);
    }
`

const SingleValue = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 2px;
    margin-right: 2px;
    box-sizing: border-box;
`

const MultiValue = styled.div`
    border:1px solid var(--dark);
    display: flex;
    min-width: 0px;
    background-color:  var(--select-multivalue-bg-color);
    border-radius: 99em;
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    box-sizing: border-box;
`

const MultiValueLabel = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    font-size: 85%;
    padding-inline-start: 6px;
    padding-inline-end:6px;
    box-sizing: border-box;
`

const MultiValueRemoveBtn = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    border-radius: 2px;
    padding-left: 4px;
    font-size: 85%;
    padding-right: 4px;
    box-sizing: border-box;
`

const IconWrapper = styled.div`
    z-index: 1;
    position: absolute;
    top:13px;
    left:10px;
    font-size: 1.4em;
    color:var(--input-icon-color);
`

const Description = styled.span`
    display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    align-items: center;
`

const ErrorMsg = styled.span`
   display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
    color:var(--input-error-color);
`


interface FocusedOption {
    index: number;
    option: IOption
}

const Select = React.forwardRef<HTMLElement, SelectProps>((props: SelectProps, ref: any) => {

    const { searchable, value, required, errorMsg, placeholder, multiSelect, disabled, description, icon, className, onSelection, options = [], ...rest } = props

    const [optionList, optionListRef, setOptionList] = useReferredState<IOption[]>(options ?? [])

    const [selection, selectionRef, setSelection] = useReferredState<IOption | IOption[] | null>(value)

    const [showList, showListRef, setShowList] = useReferredState<boolean>(false);

    const [focusedOption, focusedOptionRef, setFocusedOption] = useReferredState<FocusedOption | null>(null)

    const [filterTerm, setFilterTerm] = useState("")


    const inputRef: any = useRef(null)
    const wrapperRef: any = useRef(ref)


    const refreshOptionList = () => {

        let selectedItems = multiSelect ? (selectionRef.current as IOption[] ?? []) : [selectionRef.current as IOption];

        setOptionList(options.filter(x => !selectedItems.find(y => y.label === x.label)))
    }

    const onItemSelect = (item: IOption) => {


        onSelection && onSelection(item)

        if (multiSelect) {

            const arr: IOption[] = selectionRef.current as IOption[] ?? []

            setSelection([...arr, item])

        } else {

            setSelection(item)
            setShowList(!showList)
        }
        if (inputRef && inputRef.current) {
            inputRef.current.value = ""
            setFilterTerm("")
        }

        refreshOptionList()

    }

    const onFocus = () => {

        if (inputRef && inputRef.current) {
            inputRef?.current.focus()
        }

        if (showList) {
            inputRef.current?.blur()
        }
        setShowList(!showList)
    }

    const filter = useCallback(debounce((value: any) => {

        if (value === "") {
            setOptionList(options ?? [])
            return
        }

        const searchPattern = new RegExp(value, 'i');

        const addedItems = multiSelect ? [...selectionRef.current as IOption[] ?? []] : (selectionRef.current ? [selectionRef.current as IOption] : [])

        setOptionList(options.filter(item => searchPattern.test(item.label) && !addedItems.find(x => x.label === item.label)) ?? [])

    }, 150), [filterTerm])

    const onSearch = (e: any) => {
        setFilterTerm(e.target.value)

        filter(e.target.value)
    }

    const removeSelection = (e: any) => {
        e.preventDefault();
        e.stopPropagation()

        setSelection(null)

        setOptionList(options ?? [])
    }

    const removeMultiValue = (e: any, item: IOption) => {
        e.stopPropagation()

        setSelection(selection?.filter((x: IOption) => x.label !== item.label))

        setOptionList([...optionListRef.current ?? [], item])
    }

    const handleClickOutside = (e: any) => {

        if (wrapperRef.current && !wrapperRef.current?.contains(e?.target as Node)) {
            setShowList(false)
        }
    }

    const onOptionsItemHover = (index: number, item: IOption) => {
        setFocusedOption({ index: index, option: item })
    }

    const handleDropdownNavigation = (e: any) => {
        if (showListRef.current) {
            if (e.key === "ArrowDown" || e.keyCode === 40) {

                const list = optionListRef.current ?? []

                const index = ((focusedOptionRef.current?.index ?? 0) + 1) % list.length

                setFocusedOption({ index: index, option: list[index] })

            } else if (e.key === "ArrowUp" || e.keyCode === 38) {

                const list = optionListRef.current ?? []

                const index = focusedOptionRef.current?.index === 0 ? list.length - 1 : (focusedOptionRef.current?.index ?? 0) - 1

                setFocusedOption({ index: index, option: list[index] })

            } else if (e.key === "Enter" || e.keyCode === 13) {

                if (focusedOptionRef.current?.option) {

                    onItemSelect(focusedOptionRef.current?.option)
                }

            } else if (e.key === "Escape" || e.keyCode === 27) {
                setShowList(false)
            }
        }
    }

    useEffect(() => {

        document.addEventListener("click", handleClickOutside, true)
        document.addEventListener("keydown", handleDropdownNavigation, true)

        return () => {
            document.removeEventListener("click", handleClickOutside, true)
            document.removeEventListener("keydown", handleDropdownNavigation, true)
        }

    }, [])

    return <SelectWrapper {...rest} ref={wrapperRef} className={classNames(className, "input-group", disabled && "disabled")}>
        {icon && <IconWrapper className="icon-prepend">{icon}</IconWrapper>}
        <ControlContainer className={classNames("select-input-wrapper", errorMsg && "invalid", showList && "focused")} onClick={onFocus} tabIndex={disabled ? -1 : 0}>

            {placeholder ? <Placeholder $isrequired={required} $hasValue={((Array.isArray(selection) ? selection.length > 0 : Object.keys(selection ?? {}).length > 0) || filterTerm.length > 0)} className={classNames(icon && "with-icon", "input-placeholder")}>{placeholder}</Placeholder> : null}

            <ValueContainer className={classNames((multiSelect && selection && selection.length > 0) && "multiselect", "select-input-value-container", icon && "with-icon")} $display={multiSelect && selection?.length > 0 ? "flex" : "grid"}>

                {selection && !multiSelect && filterTerm.length <= 0 ? <SingleValue className="select-input-single-value">{(selection as IOption).label}</SingleValue> : null}

                {multiSelect && selection && selection.length > 0 ?
                    <>{(selection as IOption[]).map((x: IOption, index: number) => <MultiValue className="select-input-multi-value-container" key={index} onClick={(e: any) => removeMultiValue(e, x)}><MultiValueLabel className="select-input-multi-value-label">{x.label}</MultiValueLabel><MultiValueRemoveBtn className="select-input-multi-value-remove-button" role="button" aria-label={`Remove ${x.label}`} >&#10006;</MultiValueRemoveBtn></MultiValue>)}</>
                    : null}

                {searchable && <SearchWrapper className="select-input-searchbar-container">
                    <SearchInput className="select-input-searchbar" ref={inputRef} disabled={disabled} aria-disabled={disabled} onChange={onSearch} autoCapitalize="none" autoComplete="off" autoCorrect="off" spellCheck="false" aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" role="combobox" />
                </SearchWrapper>}
            </ValueContainer>
            <IndicatorsContainer className="select-input-indicator-container">
                {(multiSelect && selection?.length > 0 || (!multiSelect && selection)) && <>
                    <IndicatorContainer className="select-input-remove-selection-indicator" tabIndex={disabled ? -1 : 0} role="button" aria-label="Remove selection" onClick={removeSelection}>
                        &#10006;
                    </IndicatorContainer>
                    <IndicatorSeperator className="select-input-indicator-seperator" />
                </>}
                <IndicatorContainer aria-hidden="true" className="select-input-dropdown-indicator" >
                    <CustomIcon type="fontawesome" icon={faChevronDown} />
                </IndicatorContainer>
            </IndicatorsContainer>
            {
                showList ? <OptionsContainer className="select-input-options-container" >
                    <OptionList className="select-input-options-list" aria-invalid={!!errorMsg} role="listbox" aria-label="Option list" aria-required={required} aria-multiselectable={multiSelect} aria-expanded={showList} aria-orientation="vertical">
                        {optionListRef.current!.map((x: IOption, index: number) => <OptionItem role="option" key={index} className={classNames("select-input-option-item", focusedOption?.option.label === x.label && "focused")} onClick={(e: any) => onItemSelect(x)} onMouseEnter={(e) => onOptionsItemHover(index, x)}>{x.label}</OptionItem>)}
                    </OptionList>
                </OptionsContainer> : null
            }
        </ControlContainer>
        {(description || errorMsg) ? <InfoContainer className="info-container">
            {description && !errorMsg && <Description className="info-description">{description}</Description>}
            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </InfoContainer> : null}
    </SelectWrapper>

})


export default Select