import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({message : "Add New Organisation clicked", status : 1}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => addNewTeamMember()}>Invite New</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {
        name: "TechCorp",
        avatar: "https://logo.clearbit.com/techcorp.com",
        email: "contact@techcorp.com",
        role: "Tech",
        joinedOn: moment(new Date()).add(-5*1, 'days').format("DD MMM YYYY"),
        lastActive: "5 hr ago"
    },
    {
        name: "InnovateX",
        avatar: "https://logo.clearbit.com/innovatex.com",
        email: "contact@innovatex.com",
        role: "Tech",
        joinedOn: moment(new Date()).add(-5*2, 'days').format("DD MMM YYYY"),
        lastActive: "15 min ago"
    },
    {
        name: "GlobalSolutions",
        avatar: "https://logo.clearbit.com/globalsolutions.com",
        email: "contact@globalsolutions.com",
        role: "Business",
        joinedOn: moment(new Date()).add(-5*3, 'days').format("DD MMM YYYY"),
        lastActive: "20 hr ago"
    },
    {
        name: "MatrixSystems",
        avatar: "https://logo.clearbit.com/matrixsystems.com",
        email: "contact@matrixsystems.com",
        role: "Tech",
        joinedOn: moment(new Date()).add(-5*4, 'days').format("DD MMM YYYY"),
        lastActive: "1 hr ago"
    },
    {
        name: "SupportHub",
        avatar: "https://logo.clearbit.com/supporthub.com",
        email: "contact@supporthub.com",
        role: "Business",
        joinedOn: moment(new Date()).add(-5*5, 'days').format("DD MMM YYYY"),
        lastActive: "40 min ago"
    },
    {
        name: "MiyaServices",
        avatar: "https://logo.clearbit.com/miyaservices.com",
        email: "contact@miyaservices.com",
        role: "Health",
        joinedOn: moment(new Date()).add(-5*7, 'days').format("DD MMM YYYY"),
        lastActive: "5 hr ago"
    }
];

function Team(){


    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (role) => {
        if(role  === "School")return <div className="badge badge-secondary">{role}</div>
        if(role  === "Business")return <div className="badge">{role}</div>
        if(role  === "Tech")return <div className="badge badge-primary">{role}</div>
        if(role  === "Medical")return <div className="badge badge-accent">{role}</div>
        else return <div className="badge badge-ghost">{role}</div>
    }

    return(
        <>
            
            <TitleCard title="Active Organisations" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Organisation</th>
                        <th>Email Id</th>
                        <th>Created On</th>
                        <th>Type</th>
                        <th>Last Active</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.joinedOn}</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td>{l.lastActive}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Team