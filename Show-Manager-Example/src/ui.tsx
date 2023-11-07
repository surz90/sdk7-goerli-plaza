import * as showMgmt from 'show-manager/src'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import * as ui from 'dcl-ui-toolkit'
import { openExternalUrl } from '~system/RestrictedActions'
import { Color4 } from '@dcl/sdk/math'

const uiComponent = () => (
	[
		ui.render(),
		showMgmt.renderHUD(),
		GitHubLinkUi()
	]
)
export function setupUi() {
	ReactEcsRenderer.setUiRenderer(uiComponent)
}





// GitHub link

function GitHubLinkUi() {

	const projectPath = "BouncerUI"

	const fullPath = "https://github.com/decentraland/sdk7-goerli-plaza/tree/main/" + projectPath


	return <UiEntity
		uiTransform={{
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-between',
			positionType: 'absolute',
			position: { right: "8%", bottom: '3%' }
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
