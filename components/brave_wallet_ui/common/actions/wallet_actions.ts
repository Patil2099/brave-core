/* Copyright (c) 2021 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createAction } from 'redux-act'
import { InitializedPayloadType, UnlockWalletPayloadType, SetInitialAccountNamesPayloadType, AddNewAccountNamePayloadType } from '../constants/action_types'
import { AppObjectType, NetworkOptionsType, WalletAccountType } from '../../constants/types'

export const initialize = createAction('initialize')
export const initialized = createAction<InitializedPayloadType>('initialized')
export const lockWallet = createAction('lockWallet')
export const unlockWallet = createAction<UnlockWalletPayloadType>('unlockWallet')
export const addFavoriteApp = createAction<AppObjectType>('addFavoriteApp')
export const removeFavoriteApp = createAction<AppObjectType>('removeFavoriteApp')
export const hasIncorrectPassword = createAction<boolean>('hasIncorrectPassword')
export const setInitialAccountNames = createAction<SetInitialAccountNamesPayloadType>('setInitialAccountNames')
export const addNewAccountName = createAction<AddNewAccountNamePayloadType>('addNewAccountName')
export const selectAccount = createAction<WalletAccountType>('selectAccount')
export const selectNetwork = createAction<NetworkOptionsType>('selectNetwork')
