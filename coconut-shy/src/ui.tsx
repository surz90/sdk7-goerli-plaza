import { executeTask } from '@dcl/sdk/ecs'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import * as ui from 'dcl-ui-toolkit'
import { uiBar } from './ui-entities/UiBar'
import { openExternalUrl } from '~system/RestrictedActions'
import { Color4 } from '@dcl/sdk/math'

export function setupUi() {
	ReactEcsRenderer.setUiRenderer(() => [
		...ui.render(),
		GitHubLinkUi()
	])

	executeTask(async function () {
		uiBar
	})
}





// GitHub link

function GitHubLinkUi() {

	const projectPath = "coconut-shy"

	const fullPath = "https://github.com/decentraland/sdk7-goerli-plaza/tree/main/" + projectPath


	return <UiEntity
		uiTransform={{
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			positionType: 'absolute',
			position: { right: "3%", bottom: '3%' }
		}}
	>
		<UiEntity
			uiTransform={{
				width: '100',
				height: '100',
			}}
			uiBackground={{
				textureMode: 'stretch',
				texture: {
					src: "images/gh.png"
				}
			}}

			onMouseDown={() => {
				console.log("OPENING LINK")
				openExternalUrl({ url: fullPath })
			}}
		/>
		<Label
			value="View code"
			color={Color4.Black()}
			fontSize={18}
			textAlign="middle-center"
		/>
	</UiEntity>
}