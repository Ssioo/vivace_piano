import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { membersStore } from '../stores/members'
import { Member } from '../models/user'
import { VivaceContainer } from '../components/app-bar'
import {
  Box, Button,
  Collapse, Hidden,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core'
import { formatBirth } from '../infras/formatter'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { appStore } from '../stores/app'

const MembersScreen = () => {
  useEffect(() => {
    appStore.loading = true
    membersStore.fetchMembers()
      .finally(() => appStore.loading = false)
    appStore.isRoot = true
    appStore.title = '멤버관리'
  }, [])

  return (
    <VivaceContainer size='xl'>
      <MemberListView/>
      <Button
        variant='contained'
        color='primary'
      >
        추가하기
      </Button>
    </VivaceContainer>
  )
}

const MemberListView = observer(() => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  return (
    <>
      <TableContainer>
        <Table stickyHeader style={{ minWidth: 600 }} size='small'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>이름</TableCell>
              <TableCell align='center'>전화번호</TableCell>
              <TableCell align='center'>비밀번호</TableCell>
              <TableCell align='center'>생일</TableCell>
              <TableCell align='center'>기수</TableCell>
              <TableCell align='center'>역할</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {membersStore.members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((m) => (
              <MemberItemView member={m} key={m.key}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={membersStore.members.length}
        onChangePage={(e, idx) => setPage(idx)}
        onChangeRowsPerPage={({ target }) => {
          setRowsPerPage(+target.value)
          setPage(0)
        }}
        component='div'
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 100]}
      />
    </>
  )
})

const MemberItemView: React.FC<{ member: Member }> = ({ member }) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      appStore.loading = true
      // TODO: fetch 활동내역
      appStore.loading = false
    }
  }, [isOpen])

  return (
    <>
      <TableRow>
        <TableCell>{member.name}</TableCell>
        <TableCell>{member.phone}</TableCell>
        <TableCell>{member.pwd}</TableCell>
        <TableCell>{formatBirth(member.birth)}</TableCell>
        <TableCell>{member.generations.join(', ')}</TableCell>
        <TableCell>{member.roles.join(', ')}</TableCell>
        <TableCell>
          <IconButton aria-label='펼치기' size='small' onClick={() => setOpen(!isOpen)}>
            {isOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='h6'>
                활동내역
              </Typography>
              <Button variant='contained' color='primary'>수정</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default MembersScreen
