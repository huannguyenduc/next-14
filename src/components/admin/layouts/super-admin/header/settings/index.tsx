import { BaseButton } from '@/components/common/base-button';
import { BasePopover } from '@/components/common/base-popover';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import { HeaderActionWrapper } from '../index.styles';
import { SettingsOverlay } from './settings-overlay/settings-overlay';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover content={<SettingsOverlay />} trigger="click" afterOpenChange={setOpened}>
      <HeaderActionWrapper>
        <BaseButton
          ghost={isOpened}
          type={isOpened ? 'default' : 'text'}
          icon={<SettingOutlined />}
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
