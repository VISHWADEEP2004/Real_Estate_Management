import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const properties = [
    {
        propertyID: "PROP001",
        status: "Sold",
        salePrice: "$450,000",
        agent: "John Doe",
    },
    {
        propertyID: "PROP002",
        status: "For Sale",
        salePrice: "$350,000",
        agent: "Jane Smith",
    },
    {
        propertyID: "PROP003",
        status: "Under Offer",
        salePrice: "$275,000",
        agent: "Emily Davis",
    },
    {
        propertyID: "PROP004",
        status: "Sold",
        salePrice: "$500,000",
        agent: "Michael Johnson",
    },
    {
        propertyID: "PROP005",
        status: "For Sale",
        salePrice: "$400,000",
        agent: "Sarah Brown",
    },
    {
        propertyID: "PROP006",
        status: "For Sale",
        salePrice: "$325,000",
        agent: "Chris Lee",
    },
    {
        propertyID: "PROP007",
        status: "Under Offer",
        salePrice: "$275,000",
        agent: "Lisa White",
    },
]

export const AdminUsers = () => {
    return (
        <div className='w-full h-full flex justify-center'>
            <Table className="w-full max-w-6xl">
                <TableCaption>A list of recent property transactions and statuses.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Property ID</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Sale Price</TableHead>
                        <TableHead className="text-center">Agent</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {properties.map((property) => (
                        <TableRow key={property.propertyID}>
                            <TableCell className="text-center">{property.propertyID}</TableCell>
                            <TableCell className="text-center">{property.status}</TableCell>
                            <TableCell className="text-center">{property.salePrice}</TableCell>
                            <TableCell className="text-center">{property.agent}</TableCell>
                        </TableRow>
                    ))}
                    {properties.map((property) => (
                        <TableRow key={property.propertyID}>
                            <TableCell className="text-center">{property.propertyID}</TableCell>
                            <TableCell className="text-center">{property.status}</TableCell>
                            <TableCell className="text-center">{property.salePrice}</TableCell>
                            <TableCell className="text-center">{property.agent}</TableCell>
                        </TableRow>
                    ))}
                    {properties.map((property) => (
                        <TableRow key={property.propertyID}>
                            <TableCell className="text-center">{property.propertyID}</TableCell>
                            <TableCell className="text-center">{property.status}</TableCell>
                            <TableCell className="text-center">{property.salePrice}</TableCell>
                            <TableCell className="text-center">{property.agent}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
