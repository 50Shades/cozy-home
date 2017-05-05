import React from 'react'
import { translate } from '../plugins/preact-polyglot'
import UseCaseList from './UseCaseList'

const DiscoveryList = ({ t, useCases, context, children }) => (
  <div className='content'>
    <h1>{t('discovery title')}</h1>
    <UseCaseList useCases={useCases} context={context} />
    {children}
  </div>
)

export default translate()(DiscoveryList)
