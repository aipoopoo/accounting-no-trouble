import React from 'react'
import RadioList from './RadioList'
import Button from './Button'
import { useUsersMe } from '../hooks/asana/useUsersMe.js'
import { useRadio } from '../hooks/useRadio.js'

function Workspace({ updateWorkspaceGid }) {
	const { isFetching, workspaces, meGid } = useUsersMe()
	const radioList = workspaces.map(workspace =>
		Object.assign(workspace, { key: workspace.gid })
	)

	const { checkedRadio, updateRadio } = useRadio()
	const handleClick = () => {
		updateWorkspaceGid(meGid, checkedRadio)
	}

	return (
		<>
			<h1>Workspaces</h1>
			{isFetching ? (
				<p>fetching...</p>
			) : (
				<RadioList
					inputName={'workspaces'}
					currentRadio={checkedRadio}
					radioList={radioList}
					updateCurrentRadio={updateRadio}
				/>
			)}
			<Button isDisabled={!checkedRadio} handleClick={handleClick}>
				confirm
			</Button>
		</>
	)
}

export default Workspace