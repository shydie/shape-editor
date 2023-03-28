import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../features/activeTool'
import { SET_ACTIVE_TOOL } from 'features/activeTool/actionTypes'
import Control, { ControlIcon } from 'components/control'
import toolsData from 'constants/tools'
import { RESET_SELECT_SHAPE } from 'features/shapes/actionTypes'

import './ToolsControls.css'

const ToolsControls = () => {
  const dispatch = useDispatch()
  const activeTool = useSelector(selectors.getActiveTool)

  const handleClick = (name: string) => {
    if (activeTool === 'select') {
      dispatch({ type: RESET_SELECT_SHAPE })
    }

    dispatch({ type: SET_ACTIVE_TOOL, payload: { name } })
  }

  const tools = toolsData.map(({ name }) => (
    <Control
      key={name}
      title={name}
      onClick={() => handleClick(name)}
      isActive={name === activeTool}
    >
      <ControlIcon name={name} />
    </Control>
  ))

  return <div className="tools-controls">{tools}</div>
}

export default ToolsControls
