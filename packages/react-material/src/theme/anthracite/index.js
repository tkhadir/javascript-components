import {createMuiTheme} from '@material-ui/core';
import {commonBaseThemeConfig} from "../common-base/config";
import * as _ from 'lodash';

import {anthraciteShape} from "./shape";
import {anthraciteTypography} from "./typography";
// Overrides
import {anthraciteAppBar} from "./overrides/appbar";
import {anthraciteButton, anthraciteButtonBase, anthraciteIconButton} from "./overrides/button";
import {anthraciteCard, anthraciteCardContent, anthraciteCardHeader} from "./overrides/card"
import {anthraciteCheckbox} from "./overrides/checkbox";
import {anthraciteMenu, anthraciteMenuItem} from "./overrides/menu";
import {anthracitePaper} from "./overrides/paper";
import {anthraciteSelect} from "./overrides/select";
import {anthraciteTable, anthraciteTableCell, anthraciteTableRow, anthraciteTablePagination} from "./overrides/table";
import {anthraciteTab, anthraciteTabs} from "./overrides/tabs";
import {anthraciteToolBar} from "./overrides/toolbar";

// Import of Light Anthracite theming import
import {anthraciteLightPalette} from "./light/palette";
import {anthraciteLightChip} from "./light/overrides/chip";
import {
    anthraciteLightDialog,
    anthraciteLightDialogActions,
    anthraciteLightDialogTitle
} from "./light/overrides/dialog";
import {anthraciteLightFormControlLabel, anthraciteLightFormLabel} from "./light/overrides/form";
import {anthraciteLightInput} from "./light/overrides/input";
import {
    anthraciteLightListItem,
    anthraciteLightListItemSecondaryAction,
    anthraciteLightListItemText,
    anthraciteLightListSubheader
} from "./light/overrides/list";

import {anthraciteLightPanel, anthraciteLightPanelActions, anthraciteLightPanelDetails} from "./light/overrides/panel";

// Import of Dark Anthracite theming
import {anthraciteDarkPalette} from "./dark/palette";
import {anthraciteDarkDialog, anthraciteDarkDialogActions, anthraciteDarkDialogTitle} from "./dark/overrides/dialog";
import {anthraciteDarkFormControlLabel, anthraciteDarkFormLabel} from "./dark/overrides/form";
import {anthraciteDarkInput} from "./dark/overrides/input";
import {
    anthraciteDarkListItem,
    anthraciteDarkListItemIcon,
    anthraciteDarkListItemSecondaryAction,
    anthraciteDarkListItemText,
    anthraciteDarkListSubheader
} from "./dark/overrides/list";
import {anthraciteDarkPanel, anthraciteDarkPanelActions, anthraciteDarkPanelDetails} from "./dark/overrides/panel";


const anthraciteLightThemeConfig = {
    palette: anthraciteLightPalette,
    shape: anthraciteShape,
    typography: anthraciteTypography
};

const anthraciteLightThemeOverrides = (theme) => ({
    MuiAppBar: anthraciteAppBar(theme),
    MuiButton: anthraciteButton(theme),
    MuiButtonBase: anthraciteButtonBase(theme),
    MuiIconButton: anthraciteIconButton(theme),
    MuiCard: anthraciteCard(theme),
    MuiCardContent: anthraciteCardContent(theme),
    MuiCardHeader: anthraciteCardHeader(theme),
    MuiCheckbox: anthraciteCheckbox(theme),
    MuiChip: anthraciteLightChip,
    MuiDialogTitle: anthraciteLightDialogTitle,
    MuiDialog: anthraciteLightDialog,
    MuiDialogActions: anthraciteLightDialogActions,
    MuiFormLabel: anthraciteLightFormLabel,
    MuiFormControlLabel: anthraciteLightFormControlLabel,
    MuiInput: anthraciteLightInput,
    MuiListItem: anthraciteLightListItem,
    MuiListItemSecondaryAction: anthraciteLightListItemSecondaryAction,
    MuiListSubheader: anthraciteLightListSubheader,
    MuiListItemText: anthraciteLightListItemText,
    MuiMenu: anthraciteMenu(theme),
    MuiMenuItem: anthraciteMenuItem(theme),
    MuiExpansionPanel: anthraciteLightPanel,
    MuiExpansionPanelDetails: anthraciteLightPanelDetails,
    MuiExpansionPanelActions: anthraciteLightPanelActions,
    MuiPaper: anthracitePaper(theme),
    MuiSelect: anthraciteSelect(theme),
    MuiTable: anthraciteTable(theme),
    MuiTableRow: anthraciteTableRow(theme),
    MuiTablePagination: anthraciteTablePagination(theme),
    MuiTableCell: anthraciteTableCell(theme),
    MuiTab: anthraciteTab(theme),
    MuiTabs: anthraciteTabs(theme),
    MuiToolbar: anthraciteToolBar(theme)
});

const anthraciteLightTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, anthraciteLightThemeConfig));
_.merge(anthraciteLightTheme, {overrides: anthraciteLightThemeOverrides(anthraciteLightTheme)});

const anthraciteDarkThemeConfig = {
    palette: anthraciteDarkPalette,
    shape: anthraciteShape,
    typography: anthraciteTypography
};

const anthraciteDarkThemeOverrides = (theme) => ({
    MuiAppBar: anthraciteAppBar(theme),
    MuiButton: anthraciteButton(theme),
    MuiButtonBase: anthraciteButtonBase(theme),
    MuiIconButton: anthraciteIconButton(theme),
    MuiCard: anthraciteCard(theme),
    MuiCardContent: anthraciteCardContent(theme),
    MuiCardHeader: anthraciteCardHeader(theme),
    MuiCheckbox: anthraciteCheckbox(theme),
    MuiDialogTitle: anthraciteDarkDialogTitle,
    MuiDialog: anthraciteDarkDialog,
    MuiDialogActions: anthraciteDarkDialogActions,
    MuiFormLabel: anthraciteDarkFormLabel,
    MuiFormControlLabel: anthraciteDarkFormControlLabel,
    MuiInput: anthraciteDarkInput,
    MuiListItem: anthraciteDarkListItem,
    MuiListItemIcon: anthraciteDarkListItemIcon,
    MuiListItemSecondaryAction: anthraciteDarkListItemSecondaryAction,
    MuiListSubheader: anthraciteDarkListSubheader,
    MuiListItemText: anthraciteDarkListItemText,
    MuiMenu: anthraciteMenu(theme),
    MuiMenuItem: anthraciteMenuItem(theme),
    MuiExpansionPanel: anthraciteDarkPanel,
    MuiExpansionPanelDetails: anthraciteDarkPanelDetails,
    MuiExpansionPanelActions: anthraciteDarkPanelActions,
    MuiPaper: anthracitePaper(theme),
    MuiSelect: anthraciteSelect(theme),
    MuiTable: anthraciteTable(theme),
    MuiTableRow: anthraciteTableRow(theme),
    MuiTableCell: anthraciteTableCell(theme),
    MuiTab: anthraciteTab(theme),
    MuiTabs: anthraciteTabs(theme),
    MuiToolbar: anthraciteToolBar(theme)
});

const anthraciteDarkTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, anthraciteDarkThemeConfig));
_.merge(anthraciteDarkTheme, {overrides: anthraciteDarkThemeOverrides(anthraciteDarkTheme)});


export {anthraciteLightTheme, anthraciteDarkTheme}
