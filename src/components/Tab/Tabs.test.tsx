import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';
import Tab from './Tab';
import TabList from './TabList';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';

describe('Tabs Component', () => {
  let defaultProps: TabsProps;

    beforeEach(() => {
        defaultProps = {
            "data-testid": "tabs",
            children: [<TabList><Tab label="Tab 1" value="tab1" /></TabList>, <TabPanels><TabPanel value="tab1">Tab 1 content</TabPanel></TabPanels>]
        };
    });

    const renderTabs = (props: Partial<TabsProps>) => {
        return render(<Tabs {...defaultProps} {...props} />);
    };
    
    it("Renders the tabs", () => {
        renderTabs({});
        expect(screen.getByTestId('tabs')).toBeInTheDocument();
    });
});
    