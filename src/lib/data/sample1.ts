import { EdgeLinkTypes, type EdgeData, type NodeData } from "$lib/components/types";

export const edgeItems: EdgeData[]= [
    {
        id: 'edge1',
        fromId: 'node1',
        fromType: EdgeLinkTypes.End,
        toType: EdgeLinkTypes.Start,
        toId: 'node2',
        data: {
            label: 'edge 1',
        }
    },
    {
        id: 'edge2',
        fromId: 'node2',
        fromType: EdgeLinkTypes.End,
        toType: EdgeLinkTypes.Start,
        toId: 'node3',
        data: {
            label: 'edge 2',
        }
    }
];
export const nodeItems: NodeData[] = [
    {
        id: 'node1',
        position: {
            x: 100,
            y: 100,
        },
        size: {
            width: 160,
            height: 80,
        },
        data: {
            label: 'node 1',
        },
        children: [
        ],
        startLinker: {
            type: EdgeLinkTypes.Start,
            connected: false,
            highlighted: false,
            selected: false,
        },
        endLinker: {
            type: EdgeLinkTypes.End,
            connected: false,
            highlighted: false,
            selected: false,
        },
        depth: 0,
    },
    {
        id: 'node2',
        position: {
            x: 300,
            y: 100,
        },
        size: {
            width: 160,
            height: 80,
        },
        data: {
            label: 'node 2',
        },
        startLinker: {
            type: EdgeLinkTypes.Start,
            connected: false,
            highlighted: false,
            selected: false,
        },
        endLinker: {
            type: EdgeLinkTypes.End,
            connected: false,
            highlighted: false,
            selected: false,
        },
        depth: 0,
    },
    {
        id: 'node3',
        position: {
            x: 500,
            y: 100,
        },
        size: {
            width: 160,
            height: 60,
        },
        data: {
            label: 'node 3',
        },
        startLinker: {
            type: EdgeLinkTypes.Start,
            connected: false,
            highlighted: false,
            selected: false,
        },
        endLinker: {
            type: EdgeLinkTypes.End,
            connected: false,
            highlighted: false,
            selected: false,
        },
        depth: 0,
    },
] as NodeData[];